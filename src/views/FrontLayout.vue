<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WelCome | 渦相甜點店</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">

            <RouterLink to="/">Home</RouterLink> 

          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <RouterLink to="/products">產品列表</RouterLink> 
          </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <RouterLink to="/cart">購物車</RouterLink>
            </a>
            
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <RouterLink to="/about">關於渦相</RouterLink>
          </a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>



    
    <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
    components : {
        RouterView
    }
}
</script>