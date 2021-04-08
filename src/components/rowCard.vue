<template>
  <tr>
    <td>{{ ing }}</td>
    <td>{{ qua }}</td>
    <td>{{ mea }}</td>
  </tr>
</template>

<script>
export default {
  props: ["ing", "qua", "mea"],
  name: "RowCard",
};
</script>
