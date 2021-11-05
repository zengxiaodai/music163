<template>
  <van-cell center :title="title" :label="label">
    <template #right-icon>
      <van-icon name="play-circle-o" @click="$router.push(`/play/${id}`)" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.van-icon {
  font-size: 20px;
}
</style>
