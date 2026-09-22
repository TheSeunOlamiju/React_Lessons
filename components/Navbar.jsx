export default function Navbar(){
    return (
        <nav className="bg-primary flex justify-center items-center gap-x-1.5 h-14 text-white h-10">
             <img src="/src/assets/globe.png" alt="globe" className="w-6 object-contain" />
             <h1 className="text-sm">my travel journal.</h1>
        </nav>
    );
}