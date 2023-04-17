<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-lg-5">
      <a class="navbar-brand" href="#!">UniPOS</a>
      <div class="container-fluid">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="¿Qué estas buscando hoy?"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- Responsive navbar   <li class="nav-item"><a class="nav-link" href="#!">ACERCA DE</a></li> -->
          <li class="nav-item">
            <a class="nav-link" href="login.html">Inicia sesión o regístrate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <i class="bi bi-cart"></i>
              <div class="cart-counter">0</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!--CATEGORIAS-->
    <nav class="navbar">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#frutas">Frutas y Verduras</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#lacteos">Lácteos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#carnes">Carnes y pescados</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#cuidado-personal">Cuidado personal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#limpieza">Limpieza del hogar</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#bebidas">Bebidas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#dulces">Dulces y Snacks</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mascotas">Productos para mascotas</a>
    </li>

  </ul>
</nav>


  <!-- Header-->
  <header class="py-5">
    <div class="container px-lg-5">
      <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
        <div class="m-4 m-lg-5">
          <h1 class="display-5 fw-bold">¡Bienvenido a nuestro sistema de compra y venta en línea! </h1>
          <p class="fs-4">
            Aquí encontrarás una amplia variedad de productos a excelentes precios. 
            Utilizamos Bootstrap para crear una experiencia de usuario fluida y fácil 
            de usar. ¿Por qué gastar tiempo en crear CSS personalizado cuando se pueden
            usar utilidades predefinidas?<br>
            ¡Comienza a explorar nuestro catálogo ahora!
          </p>
          <a id="add-to-cart-btn" class="btn btn-primary btn-lg" href="#!">Agregar al carrito</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Content-->
  <section class="pt-4">
    <div class="container px-lg-5">
      <!-- Page Features-->
      <div class="row gx-lg-5">
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-collection"></i>
              </div>
              <h2 class="fs-4 fw-bold">Fresh new layout</h2>
              <p class="mb-0">
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-cloud-download"></i>
              </div>
              <h2 class="fs-4 fw-bold">Free to download</h2>
              <p class="mb-0">
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-card-heading"></i>
              </div>
              <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
              <p class="mb-0">
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-bootstrap"></i>
              </div>
              <h2 class="fs-4 fw-bold">Feature boxes</h2>
              <p class="mb-0">
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-code"></i>
              </div>
              <h2 class="fs-4 fw-bold">Simple clean code</h2>
              <p class="mb-0">
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
              >
                <i class="bi bi-patch-check"></i>
              </div>
              <h2 class="fs-4 fw-bold">A name you trust</h2>
              <p class="mb-0">
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; emmaprofemx</p>
    </div>
  </footer>
</template>


<script>
export default {};
</script>
