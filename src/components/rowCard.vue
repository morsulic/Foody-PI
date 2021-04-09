<template>
  <tbody>
    <tr>
      <td>{{ info.row[0].ingredient }}</td>
      <td>{{ info.row[0].quantity }}</td>
      <td>{{ info.row[0].measUnit }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["info"],
  name: "RowCard",
};
</script>
