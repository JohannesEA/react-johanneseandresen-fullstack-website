import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = ({
    text,
    bc,
    shadow,
}) => {
    const [BACKGROUND_COLOR, setBACKGROUNDCOLOR] = useState("");
    const [COLOR, setCOLOR] = useState("");
    const [HOVER_COLOR, setHOVERCOLOR] = useState("");
    const [SHADOW_COLOR] = useState(shadow);

    const BACKGROUND_COLOR_ONE = "#032859";
    const COLOR_ONE = "white";
    const HOVERCOLOR_ONE = "#04397e";
    const BACKGROUND_COLOR_TWO = "#fff";
    const COLOR_TWO = "#032859";
    const HOVERCOLOR_TWO = "#e1f5ff";
    const BACKGROUND_COLOR_THREE = {bc};
    const COLOR_THREE = "white";
    const HOVERCOLOR_THREE  = "#ff7b7b";

    

    useEffect(() => {
        const handleColor = () => {
            if (bc === "color-2") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_ONE);
                setCOLOR(COLOR_ONE);
                setHOVERCOLOR(HOVERCOLOR_ONE);
                console.log("background: ".BACKGROUND_COLOR);
            } else if (bc === "color-1") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_TWO);
                setCOLOR(COLOR_TWO);
                setHOVERCOLOR(HOVERCOLOR_TWO);
            }
            else{
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_THREE);
                setCOLOR(COLOR_THREE);
                setHOVERCOLOR(HOVERCOLOR_THREE);
            }
        };

        handleColor();
    }, [BACKGROUND_COLOR, COLOR, HOVER_COLOR]);

    return (
        <MyButton
            backgroundcolor={BACKGROUND_COLOR}
            hover={HOVER_COLOR}
            color={COLOR}
            shadowcolor={SHADOW_COLOR}
        >
            {text}
        </MyButton>
    );
};

export default Button;

const MyButton = styled.button`
    font-size:1rem;
    font-weight:500;
    z-index: 1;
    border-radius: .5em;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    background-color: ${(prop) => prop.backgroundcolor};
    color: ${(prop) => prop.color};
    padding: 10px 14px;
    box-shadow: 0px 0px 4px 2px ${(prop) => prop.shadowcolor};
    &:hover {
        background-color: ${(prop) => prop.hover};
        border-radius: 0px;
    }

    @media (max-width: 1000px) {
        padding: 9px 13px;
    }
    @media (max-width: 400px) {
        padding: 8px 12px;
    }
`;