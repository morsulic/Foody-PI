<template>
  <tbody>
    <tr>
      <td>{{ info.ingredient }}</td>
      <td>{{ info.quantity }}</td>
      <td>{{ info.measUnit }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["info"],
  name: "ingredientCard",
  data() {
    return {};
  },
};
</script>
