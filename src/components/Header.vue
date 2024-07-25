<template>
    <nav class="navbar navbar-expand-lg p-3">
        <div class="container-fluid d-flex">
            <div class="navbar-brand">
                <RouterLink to="/" @click.native="closeNavbar">
                    <img src="https://www.menin.com.br/wp-content/uploads/2024/04/LOGO_MENIN_BRANCO.png" alt=""
                        height="40px">
                </RouterLink>
            </div>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="bi bi-list fs-1"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/empreendimentos">Empreendimentos
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/portfolio">Portfolio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/simulador">Simulador</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/programas">Programas</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/noticias">Noticias</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/sobre">Sobre</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click.native="closeNavbar" to="/contato">Contato</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link search" @click.native="closeNavbar" href="#"><i class="bi bi-search ps-2"></i></a>
                    </li>
                </ul>
                <form class="d-flex">
                    <a target="_blank" href="" @click.native="closeNavbar">
                        <button type="button" class="portal btn btn-outline-light fs-6 px-3"><i
                                class="bi bi-person"></i>Portal do Cliente</button>
                    </a>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup>
const closeNavbar = () => {
    const navBar = document.getElementById('navbarSupportedContent');
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');
    }
}
</script>

<style scoped>
.navbar {
    background-color: #0a1b27;
}

.nav-link {
    position: relative;
    padding-bottom: 5px;
    color: white;
    font-size: 1.8vh;
}

.nav-link:hover,
.nav-link.active,
.nav-link:focus {
    border-bottom: 2px solid #007bff;
    color: white;
}

.portal {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.container-fluid {
    width: 80% !important;
}

@media (max-width: 1500px) {
    .container-fluid {
        width: 90% !important;
    }
}

@media (max-width: 1300px) {
    .container-fluid {
        width: 100% !important;
    }
}

@media (max-width: 1150px) {
.nav-link {
    font-size: 1.4vh;
}
}

@media (max-width: 991.98px) {
    .navbar-collapse {
        border-top: 1px solid #dee2e6;
        padding: 10px;
    }

    .navbar-nav {
        flex-direction: column;
    }

    .nav-item {
        margin-bottom: 10px;
    }

    .nav-link,
    .nav-link:hover,
    .nav-link.active {
        color: rgb(247, 247, 247) !important;
        font-size: 1.8vh;
    }

    .navbar-toggler-icon,
    .navbar-toggler {
        color: white !important;
    }


}
</style>
