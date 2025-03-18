import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Github, Instagram, Youtube, Linkedin } from "lucide-react";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <img src="../public/pngwing.com.png" alt="" className="imgPerfil" />
      <p className="arroba">@ahã</p>

      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch" >
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>

      <div className="buttons">
        <button className="inscreva">Inscreva-se no NLW</button>
        <button className="ebook">Baixe meu e-book</button>
        <button className="portifolio">Veja meu portifólio</button>
        <button className="explorer">Conheça o Explorer</button>
      </div>

      <div className="icons">
        <Github className="iconGit" />
        <Instagram className="iconInsta" />
        <Youtube className="iconYou" />
        <Linkedin className="iconIn" />
      </div>
    </div>
  );
}
