<script setup lang="ts">
</script>
<template>
  <section>
    <div class="configure-box">
      <h2>Configure Chernoff Faces</h2>
      <form>
        <div class="form-group">
          <label for="eyes">Eyes:</label>
          <select id="eyes" name="eyes">
            <option value="pb95">Pb 95</option>
            <option value="on">ON</option>
            <option value="lpg">LPG</option>
            <option value="v98">V98</option>
            <option value="von">VON</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mouth">Mouth:</label>
          <select id="mouth" name="mouth">
            <option value="pb95">Pb 95</option>
            <option value="on">ON</option>
            <option value="lpg">LPG</option>
            <option value="v98">V98</option>
            <option value="von">VON</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nose">Nose:</label>
          <select id="nose" name="nose">
            <option value="pb95">Pb 95</option>
            <option value="on">ON</option>
            <option value="lpg">LPG</option>
            <option value="v98">V98</option>
            <option value="von">VON</option>
          </select>
        </div>

        <div class="form-group">
          <label for="eyebrows">Eyebrows:</label>
          <select id="eyebrows" name="eyebrows">
            <option value="pb95">Pb 95</option>
            <option value="on">ON</option>
            <option value="lpg">LPG</option>
            <option value="v98">V98</option>
            <option value="von">VON</option>
          </select>
        </div>

        <div class="form-group">
          <label for="head">Head:</label>
          <select id="head" name="head">
            <option value="pb95">Pb 95</option>
            <option value="on">ON</option>
            <option value="lpg">LPG</option>
            <option value="v98">V98</option>
            <option value="von">VON</option>
          </select>
        </div>

        <button type="submit">Generate Chernoff Faces</button>
      </form>
    </div>

  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

section {
  width: 25vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .configure-box {
    background-color: $secondaryColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2vmin;
    box-shadow: 1vmin 1vmin 2vmin 0 $supportColor;

    h2 {
      color: $darkColor;
      width: 100%;
      padding: 2vmin;
      text-align: center;
      border-bottom: 2px solid black;
    }

    form {
      padding: 4vmin 8vmin;

      .form-group {
        margin-bottom: 1vmin;

        label {
          display: block;
          margin-bottom: 1vmin;
          margin-left: -3vmin;
          color: $darkColor;
          font-weight: bold;
          font-size: 2vmin;
        }

        select {
          padding: 1vmin;
          border: 1px solid $bgColor;
          border-radius: 1vmin;
          width: 25vmin;
          outline: none;
          cursor: pointer;
        }
      }

      button {
        width: 25vmin;
        padding: 2vmin;
        background-color: $primaryColor;
        color: $bgColor;
        border: 2px solid $primaryColor;
        border-radius: 1vmin;
        cursor: pointer;
        font-size: 1.7vmin;
        transition-duration: .4s;
        font-weight: bold;
        margin-top: 5vmin;

        &:hover {
          background-color: darken($supportColor, 20%);
          border-color: $bgColor;
        }
      }
    }
  }
}
</style>