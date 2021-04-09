<template>
  <tbody>
    <tr>
      <td>{{ info[0].ingredient }}</td>
      <td>{{ info[0].quantity }}</td>
      <td>{{ info[0].measUnit }}</td>
    </tr>
    <tr>
      <td>{{ info[0].ingredient }}</td>
      <td>{{ info[0].quantity }}</td>
      <td>{{ info[0].measUnit }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["info"],
  name: "RowCard",
};
</script>
