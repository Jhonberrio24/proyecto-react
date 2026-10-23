function Header() {
    return (
        <header style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "15px 20px", 
            backgroundColor: "#161b22", 
            color: "#fff",
            borderBottom: "1px solid #30363d"
        }}>
            <img 
                src="/logo.sena.png" 
                alt="Logo SENA" 
                style={{ width: "60px", height: "auto", marginRight: "20px" }} 
            />
            
            <div>
                <h2 style={{ margin: "0 0 5px 0", fontSize: "20px" }}>Centro Nacional Colombo Alemán</h2>
                <p style={{ margin: 0, fontSize: "14px", color: "#8b949e" }}>Formación para el futuro</p>
            </div>
        </header>
    );
}

export default Header;