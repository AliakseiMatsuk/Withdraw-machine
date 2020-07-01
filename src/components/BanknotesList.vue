<template>
  <div>
    <h4 class="mb-3 text-center">{{ title }}</h4>
    <ul class="list-group">
      <li v-for="(value, key) in banknotes"
          :key="key"
          class="list-group-item">
        <p class="mb-0">Номинал <strong>{{ key }}</strong> гривен</p>
        <p class="mb-0">Количество <strong>{{ value }}</strong> купюр</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BanknotesList',
    props: {
      title: {
        type: String,
        required: true,
      },
      banknotes: {
        type: Object,
        required: true,
      }
    }
  }
</script>