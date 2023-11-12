<template>
  <div>
    <FormSelect label="Eyes" name="eyes" />
    <FormSelect label="Mouth" name="mouth" />
    <FormSelect label="Nose" name="nose" />
    <FormSelect label="Eyebrows" name="eyebrows" />
    <FormSelect label="Head" name="head" />
  </div>
</template>

<script lang="ts">
export default {
  components: {
    FormSelect: {
      props: ['label', 'name'],
      template: `
        <div class="form-group">
          <label :for="name">{{ label }}:</label>
          <select :id="name" :name="name">
            <option value="info1">Info 1</option>
            <option value="info2">Info 2</option>
            <option value="info3">Info 3</option>
          </select>
        </div>
      `,
    },
  },
};
</script>