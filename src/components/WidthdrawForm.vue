<template>
  <form @submit.prevent="$emit('getMoney')">
    <div class="mb-2">
      <label for="amount">Сумма для получения</label>
      <input :value="value"
             :class="{'is-invalid': error}"
             id="amount"
             min="10"
             step="10"
             type="number"
             class="form-control"
             placeholder="Введите сумму для получения"
             @input="$emit('input', $event.target.value)"
      >
      <div class="invalid-feedback">
        {{ error }}
      </div>
    </div>
    <button :disabled="!value || error" class="btn btn-primary btn-lg btn-block" type="submit">
      Получить деньги
    </button>
  </form>
</template>

<script>
  /* eslint-disable no-bitwise, vue/require-prop-type-constructor */
  export default {
    name: 'WidthdrawForm',
    props: {
      value: {
        type: null | Number,
        required: true,
      },
      error: {
        type: null | String,
        required: true,
      }
    }
  }
</script>