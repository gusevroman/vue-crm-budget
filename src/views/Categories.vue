<template>
  <div>
    <!-- <section>
      <div class="row">
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Создать</h4>
            </div>

            <form>
              <div class="input-field">
                <input id="name" type="text" />
                <label for="name">Название</label>
                <span class="helper-text invalid">Введите название</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number" />
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">Минимальная величина</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редактировать</h4>
            </div>

            <form>
              <div class="input-field">
                <select>
                  <option>Category</option>
                </select>
                <label>Выберите категорию</label>
              </div>

              <div class="input-field">
                <input id="name" type="text" />
                <label for="name">Название</label>
                <span class="helper-text invalid">TITLE</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number" />
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">LIMIT</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section> -->

    <template>
      <div>
        <h3>Categories:</h3>
      </div>
      <div>
        <h4>Create</h4>
      </div>
      <el-form ref="formCategories" :model="formCategories" label-width="5rem">
        <el-form-item label="Name">
          <el-input v-model="formCategories.name"></el-input>
        </el-form-item>
        <el-form-item label="Min">
          <el-input v-model="formCategories.min"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="success"
            icon="el-icon-plus"
            circle
            mini
            @click="createCategory"
          ></el-button>
          <el-button type="danger" icon="el-icon-close" circle mini></el-button>
        </el-form-item>
      </el-form>

      <div>
        <h4>Edit</h4>
      </div>
      <el-form ref="formEditCategories" :model="formEditCategories" label-width="5rem">
        <el-form-item label="Select">
          <el-select v-model="value" placeholder="Select">
            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="formEditCategories.name"></el-input>
        </el-form-item>
        <el-form-item label="Min">
          <el-input v-model="formEditCategories.min"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="warning"
            icon="el-icon-edit"
            mini
            circle
            @click="editCategory"
          ></el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formCategories: {
        name: '',
        min: '',
      },
      formEditCategories: {
        name: '',
        min: '',
      },
      options: [
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai',
            },
            {
              value: 'Beijing',
              label: 'Beijing',
            },
          ],
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu',
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen',
            },
            {
              value: 'Guangzhou',
              label: 'Guangzhou',
            },
            {
              value: 'Dalian',
              label: 'Dalian',
            },
          ],
        },
      ],
      value: '',
    };
  },
  methods: {
    createCategory() {},
    editCategory() {},
  },
};
</script>
