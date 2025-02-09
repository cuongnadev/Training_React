import { createContext, useState, useContext, ReactNode, useCallback, useMemo } from "react";

// 1. Định nghĩa kiểu dữ liệu cho ThemeContext
interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

// 2. Tạo Context với giá trị mặc định
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Định nghĩa props cho ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // useCallback để tránh tạo lại hàm khi component re-render
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    // useMemo để tránh tạo lại object value khi không cần thiết
    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

// 4. Custom hook để sử dụng ThemeContext
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
