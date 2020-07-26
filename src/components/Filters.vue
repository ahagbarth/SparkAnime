<template>
  <b-container class="filterContainer">
    <div style="padding-bottom:2.45rem"></div>
    <div>
      <!-- <div>Genres & Tags</div> -->
      <div class="mt-2 filterTitles">Filters</div>
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-2 mb-1 rounded-pill"
      >
        <!-- This slot appears above the options from 'options' prop -->
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >Sort
          </b-form-select-option>
        </template>

        <!-- These options will appear after the ones from 'options' prop -->
        <b-form-select-option value="C">Option C</b-form-select-option>
        <b-form-select-option value="D">Option D</b-form-select-option>
      </b-form-select>
    </div>

    <div>
      <!-- <div>Genres & Tags</div> -->

      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3 mb-1 rounded-pill"
      >
        <!-- This slot appears above the options from 'options' prop -->
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >Genres & Tags
          </b-form-select-option>
        </template>

        <!-- These options will appear after the ones from 'options' prop -->
        <b-form-select-option value="C">Option C</b-form-select-option>
        <b-form-select-option value="D">Option D</b-form-select-option>
      </b-form-select>
    </div>

    <div>
      <!-- <div>Genres & Tags</div> -->

      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3 mb-2 rounded-pill "
      >
        <!-- This slot appears above the options from 'options' prop -->
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >Status
          </b-form-select-option>
        </template>

        <!-- These options will appear after the ones from 'options' prop -->
        <b-form-select-option value="C">Option C</b-form-select-option>
        <b-form-select-option value="D">Option D</b-form-select-option>
      </b-form-select>
    </div>
    <div class="mb-2 mt-2 filterTitles">Season</div>
    <div>
      <b-form-group>
        <b-form-radio-group
          id="btn-radios-2"
          v-model="selected2"
          :options="options2"
          buttons
          button-variant="outline-light"
          stacked
          name="radio-btn-outline"
          class="filterSeason rounded"
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <div></div>

    <div class="filterYear">
      <div class="mt-2 filterTitles">Year: {{ value }}</div>
      <b-form-input
        id="range-1"
        v-model="value"
        type="range"
        min="1940"
        max="2020"
      ></b-form-input>
    </div>
  </b-container>
</template>

<script>

export default {
  name: "Filter",
  data() {
    return {
      value: "2020",
      selected: null,
      options: [{ value: null, text: "Please select some item" }],
      selected2: "",
      options2: [
        { text: "All", value: "" },
        { text: "Summer", value: "SUMMER" },
        { text: "Autumn", value: "AUTUMN" },
        { text: "Winter", value: "WINTER" },
        { text: "Spring", value: "SPRING" },
      ],
    };
  },
};
</script>

<style scoped >
.filterContainer {
  border-right: 2px dashed #3a3a3a;
  margin-top: 2rem;
  height: 400px;
}
.filterYear {
  color: white;
}
.filterTitles {
  text-align: left;
  color: #ffba00;
}
.filterSeason {
  min-width: 100%;
}
</style>
