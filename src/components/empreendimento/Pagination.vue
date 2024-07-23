<template>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'active': page === currentPage }" v-for="page in totalPages" :key="page">
          <a class="page-link rounded-2 p-3 m-1 fw-bolder" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  });
  
  const emit = defineEmits(['update:currentPage']);
  
  const changePage = (page) => {
    emit('update:currentPage', page);
  };
  </script>
  
  <style scoped>
  .pagination .active .page-link {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .page-link {
    border: 3px solid #007bff;
  }
  </style>
  