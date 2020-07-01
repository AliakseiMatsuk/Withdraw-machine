<template>
  <div class="container">
    <h2 class="mb-3 text-center">Банкомат</h2>
    <div class="row justify-content-center py-3">
      <div class="col-6">
        <BanknotesList
                v-if="isWithdrawalInProgress"
                :title="'Банкноты к выдаче'"
                :banknotes="baknotesForWithdraw"
        />
        <template v-else>
          <template v-if="filteredBanknotes.length">
            <BanknotesList
                    :title="'Доступные номиналы банкнот:'"
                    :banknotes="availableBanknotes"
                    class="mb-5"
            />
            <WidthdrawForm
                    v-model.number="amount"
                    :error="error"
                    @getMoney="getMoney()"
            />
          </template>
          <h3 v-else>В банкомате нет денег</h3>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { getBanknotes, updateLimits } from '@/widthdrawService';
  import BanknotesList from '@/components/BanknotesList';
  import WidthdrawForm from '@/components/WidthdrawForm';

  export default {
    name: 'App',
    components: { WidthdrawForm, BanknotesList },
    data() {
      return {
        banknotes: {
          10: 20,
          20: 20,
          50: 20,
          100: 20,
          200: 20,
          500: 20
        },
        amount: null,
        error: null,
        isWithdrawalInProgress: false,
        baknotesForWithdraw: null
      }
    },
    computed: {
      filteredBanknotes() {
        return Object.entries(this.banknotes).filter(i => i[1]);
      },
      availableBanknotes() {
        return Object.fromEntries(this.filteredBanknotes);
      }
    },
    watch: {
      amount() {
        if (this.error) this.error = null;
      }
    },
    methods: {
      getMoney() {
        const { banknotes, message, error } = getBanknotes(this.amount, this.banknotes);

        if (banknotes) this.widthdrawMoney(banknotes);

        if (error) this.error = message;
      },
      widthdrawMoney(banknotes) {
        this.baknotesForWithdraw = banknotes;
        this.isWithdrawalInProgress = true;
        this.amount = null;

        updateLimits(this.banknotes, banknotes);

        setTimeout(() => {
          this.isWithdrawalInProgress = false;
          this.baknotesForWithdraw = null;
        }, 3000);
      }
    },
  }
</script>
