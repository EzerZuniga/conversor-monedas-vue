<template>
  <section class="about-layout">
    <div>
      <span class="eyebrow">Arquitectura frontend</span>
      <h1>Proyecto academico profesional</h1>
      <p>
        Esta aplicacion separa responsabilidades por capas: vistas para composicion de pantalla,
        componentes para UI reutilizable, Pinia para estado global, composables para logica de caso
        de uso y servicios para acceso a datos.
      </p>
    </div>

    <div class="principles-grid">
      <article>
        <h2>Composition API</h2>
        <p>
          Permite organizar logica reactiva por funcionalidad y reutilizarla sin acoplar vistas.
        </p>
      </article>
      <article>
        <h2>Pinia</h2>
        <p>Centraliza el estado compartido del conversor y mantiene acciones predecibles.</p>
      </article>
      <article>
        <h2>Capa de servicios</h2>
        <p>Prepara la futura integracion HTTP sin modificar componentes ni vistas.</p>
      </article>
    </div>
  </section>
</template>
