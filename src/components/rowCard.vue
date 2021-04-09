<template>
  <tbody>
    <tr>
      <td>{{ info.row[0].ingredient }}</td>
      <td>{{ info.row[0].quantity }}</td>
      <td>{{ info.row[0].measUnit }}</td>
    </tr>
    <tr>
      <td>{{ info.row[1].ingredient }}</td>
      <td>{{ info.row[1].quantity }}</td>
      <td>{{ info.row[1].measUnit }}</td>
    </tr>
    <tr>
      <td>{{ info.row[2].ingredient }}</td>
      <td>{{ info.row[2].quantity }}</td>
      <td>{{ info.row[2].measUnit }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["info"],
  name: "RowCard",
};
</script>
