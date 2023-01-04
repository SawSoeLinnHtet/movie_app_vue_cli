<template>
  <ul class="pagination pagination-md justify-content-center justify-content-lg-end mt-2 mb-3">
    <li class="page-item">
      <button
        type="button"
        class="page-link bg-dark"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>
    <li class="page-item">
      <button
        type="button"
        class="page-link bg-dark"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    <li
      v-for="page in pages"
      :key="page.name"
      class="page-item bg-lime"
      :class="{active:page.isDisabled}"
    >
      <button
        type="button"
        class="page-link"
        :disabled="page.isDisabled"
        @click="onClickPage(page.name)"
        :class="{ active: isPageActive(page.name) , 'bg-dark': !isPageActive(page.name)  }"
      >
        {{ page.name }}
      </button>
    </li>
    <li class="page-item">
      <button
        type="button"
        class="page-link bg-dark"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
    <li class="page-item">
      <button
        type="button"
        class="page-link bg-dark"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
      },
      totalPages: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      startPage() {
        if (this.currentPage === 1) { 
          return 1;
        }
        return this.currentPage - 1; 
      },
      pages() {
        const range = [];
        for (
          let i = this.startPage; // 2
          i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this. totalPages); //4
          i++
        ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },
    methods: {
      onClickFirstPage() {
        this.$emit('pageChanged', 1);
      },
      onClickPreviousPage() {
        this.$emit('pageChanged', this.currentPage - 1); //2
      },
      onClickPage(page) {
        this.$emit('pageChanged', page); 
      },
      onClickNextPage() {
        this.$emit('pageChanged', this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit('pageChanged', 500);
      },
      isPageActive(page) {
        return this.currentPage === page;
      }
    }
  };
</script>