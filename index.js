const nav = document.querySelector("nav");

const createMenuBurger = () => {
  const menuBurger = document.createElement("div");
  menuBurger.classList.add(
    "flex",
    "flex-col",
    "space-y-2",
    "gap-1",
    "bg-white",
    "p-2",
    "h-screen",
    "w-screen",
    "fixed",
    "top-0",
    "left-0",
    "z-50",
    "text-center",
    "text-2xl",
    "font-semibold",
    "text-gray-700",
    "shadow-lg",
    "duration-300"
  );
  menuBurger.innerHTML = `
        <button class="close-burger absolute top-4 right-4 text-3xl">&times;</button>
        <ul class="flex flex-col space-y-4 text-lg font-medium text-gray-700">
            <li><a href="#" class="hover:text-[#2A8E9E] transition">Products</a></li>
            <li><a href="#" class="hover:text-[#2A8E9E] transition">Customers</a></li>
            <li><a href="#" class="hover:text-[#2A8E9E] transition">Pricing</a></li>
            <li><a href="#" class="hover:text-[#2A8E9E] transition">About</a></li>
        </ul>
        <div class="btn flex flex-col space-y-4">
            <a href="#" class="bg-[#2A8E9E] text-white px-6 py-2 rounded-lg shadow hover:bg-[#246f7a] transition font-semibold">Get Started</a>
            <a href="#" class="px-6 py-2 border border-[#2A8E9E] rounded-lg text-[#2A8E9E] hover:bg-[#f0fdfa] transition font-semibold">Sign Up</a>
        </div>
    `;
  // Bouton pour fermer le menu
  menuBurger.querySelector(".close-burger").addEventListener("click", () => {
    menuBurger.remove();
  });
  return menuBurger;
};

const creatMenu = () => {
  const mobileMenuToggle = document.createElement("button");
  mobileMenuToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 md:hidden cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
`;
  mobileMenuToggle.classList.add("md:hidden", "cursor-pointer", "z-50");
  nav.appendChild(mobileMenuToggle);

  mobileMenuToggle.addEventListener("click", () => {
    // Vérifie si le menu existe déjà
    if (!document.querySelector(".flex.flex-col.h-screen.w-screen.fixed")) {
      nav.appendChild(createMenuBurger());
    }
  });
};

if (window.innerWidth < 768) {
  // Code spécifique pour les écrans mobiles
  console.log("Mobile view");
  creatMenu();
}
