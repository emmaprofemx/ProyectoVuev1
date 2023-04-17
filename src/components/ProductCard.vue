<template>
    <div class="card h-100">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text">{{ price }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      description: String,
      price: String,
      image: String,
    },
  };
  </script>
  