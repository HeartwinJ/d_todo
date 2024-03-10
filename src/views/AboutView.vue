<script setup lang="ts">
const appVersion = import.meta.env.VITE_APP_VERSION;
</script>
<template>
  <div class="h-full flex flex-col">
    <div class="grow">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita
      quia, nobis quasi ex eligendi fuga corporis sapiente voluptatum
      consequatur ad quos illo omnis modi aut numquam veniam quod maxime. Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui asperiores
      veritatis adipisci unde veniam. Fugiat expedita dolore itaque fugit
      perferendis, nam dolor! Perferendis labore veritatis quidem distinctio
      accusamus odio.
      <br /><br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      accusantium fuga ratione adipisci officiis dicta hic, sed vitae harum eius
      quisquam, sunt temporibus pariatur nihil. Saepe nulla reprehenderit
      praesentium assumenda! Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Recusandae vel, unde iure numquam reiciendis excepturi quibusdam
      enim soluta odit ipsa ullam a fugiat libero facilis veniam ex. Neque,
      voluptates? Tenetur?
    </div>
    <div class="text-center italic text-neutral-500">v {{ appVersion }}</div>
    <div class="text-center">Made with ❤️ by Heartwin</div>
  </div>
</template>
