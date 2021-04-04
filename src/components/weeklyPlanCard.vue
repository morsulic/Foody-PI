<template>
  <tbody>
    <tr>
      <td><b>Mon</b></td>
      <td>{{ info.monday[0] }}</td>
      <td>{{ info.monday[1] }}</td>
      <td>{{ info.monday[2] }}</td>
      <td>{{ info.monday[3] }}</td>
      <td>{{ info.monday[4] }}</td>
    </tr>
    <tr>
      <td><b>Tue</b></td>
      <td>{{ info.tuesday[0] }}</td>
      <td>{{ info.tuesday[1] }}</td>
      <td>{{ info.tuesday[2] }}</td>
      <td>{{ info.tuesday[3] }}</td>
      <td>{{ info.tuesday[4] }}</td>
    </tr>
    <tr>
      <td><b>Wed</b></td>
      <td>{{ info.wednesday[0] }}</td>
      <td>{{ info.wednesday[1] }}</td>
      <td>{{ info.wednesday[2] }}</td>
      <td>{{ info.wednesday[3] }}</td>
      <td>{{ info.wednesday[4] }}</td>
    </tr>
    <tr>
      <td><b>Thursday</b></td>
      <td>{{ info.thursday[0] }}</td>
      <td>{{ info.thursday[1] }}</td>
      <td>{{ info.thursday[2] }}</td>
      <td>{{ info.thursday[3] }}</td>
      <td>{{ info.thursday[4] }}</td>
    </tr>
    <tr>
      <td><b>Fri</b></td>
      <td>{{ info.friday[0] }}</td>
      <td>{{ info.friday[1] }}</td>
      <td>{{ info.friday[2] }}</td>
      <td>{{ info.friday[3] }}</td>
      <td>{{ info.friday[4] }}</td>
    </tr>
    <tr>
      <td><b>Sat</b></td>
      <td>{{ info.saturday[0] }}</td>
      <td>{{ info.saturday[1] }}</td>
      <td>{{ info.saturday[2] }}</td>
      <td>{{ info.saturday[3] }}</td>
      <td>{{ info.saturday[4] }}</td>
    </tr>
    <tr>
      <td><b>Sun</b></td>
      <td>{{ info.sunday[0] }}</td>
      <td>{{ info.sunday[1] }}</td>
      <td>{{ info.sunday[2] }}</td>
      <td>{{ info.sunday[3] }}</td>
      <td>{{ info.sunday[4] }}</td>
    </tr>
  </tbody>
</template>
<script>
import rowCard from "./rowCard.vue";

export default {
  props: ["info"],
  name: "WeeklyPlanCard",
  data() {
    return {};
  },

  //components: { rowCard },
};
</script>
