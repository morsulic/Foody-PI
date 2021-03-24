<template>
  <option>{{ info.name }}</option>
</template>

<script>
export default {
  props: ["info"],
  name: "DropdownCard",
};
</script>
