import styled from "@emotion/styled";
import { MyButton } from "../../../../Styles/Button";
import { colors } from "../../../../Styles/Colors";

export const SaveNewContainer = styled('div')`
 position: absolute;
 z-index: 1000;


`

export const NewPolygonButton = styled(MyButton)`
color: white;
background-color: ${colors.Red};
margin: 1em;
&:hover{
        background-color: ${colors.Red};
    }
`

export const SavePolygonButton = styled(NewPolygonButton)`
background-color: ${colors.Green};
&:hover{
        background-color: ${colors.Green};
    }

`