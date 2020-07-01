const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sort = fn => array => [...array].sort(fn);
const getKeys = object => Object.keys(object);
const map = fn => array => array.map(fn);

const getSum = object =>
  Object.entries(object).reduce(
    (acc, [banknote, count]) => acc + banknote * count,
    0
  );

const updateLimits = (limits, accumulate) => {
  Object.entries(accumulate).forEach(([banknote, count]) => {
    limits[banknote] -= count;
  });
};

const countBanknotes = (amountRequired, limits) => banknotes => {
  const limitsClone = { ...limits };
  let requered = amountRequired;

  return banknotes.reduce((acc, banknote) => {
    const addBanknote = () => {
      if (limitsClone[banknote] > 0 && requered - banknote >= 0) {
        requered -= banknote;
        limitsClone[banknote] -= 1;
        acc[banknote] = acc[banknote] ? acc[banknote] + 1 : 1;
        addBanknote();
      }
    };
    addBanknote();
    return acc;
  }, {});
};

const getBanknotes = (amountRequired, limits) => {
  const totalMoney = getSum(limits);

  if (totalMoney < amountRequired) {
    return {
      message: `В банкомате не достаточно денег для выдачи ${ amountRequired } гривен`,
      error: true
    };
  }

  const getStrategy = sortFn =>
    compose(
      countBanknotes(amountRequired, limits),
      sort(sortFn),
      map(Number),
      getKeys
    );

  const ascStrategy = getStrategy((x, y) => x - y);
  const descStrategy = getStrategy((x, y) => y - x);

  const strategy =
    getSum(descStrategy(limits)) === amountRequired
      ? descStrategy
      : ascStrategy;

  const result = strategy(limits);

  if (getSum(result) === amountRequired) {
    return { banknotes: result };
  } else {
    return {
      message: `Нет банкнот для выдачи ${ amountRequired } гривен, введите другую сумму`,
      error: true
    };
  }
};


export { getBanknotes, updateLimits };