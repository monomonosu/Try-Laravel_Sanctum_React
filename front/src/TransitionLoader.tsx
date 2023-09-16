import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const Loader = styled.div`
position: relative;
z-index: 1000;
height: 100vh;
width: 100vh;
text-align: center;
background-color: white;
`

const CustomCircularProgress = styled(CircularProgress)`
margin: 50%;
`

/**
 * ローディング画面
 */
export const TransitionLoader = () => {
    return (
        <Loader>
            <CustomCircularProgress />
        </Loader>
    )
}