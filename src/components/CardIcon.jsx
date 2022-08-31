import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import BusinessCardIcon from '../assets/img/business-card-icon.png'
import CloseIcon from '@mui/icons-material/Close'
import '../styles/Home.scss'
import styled from '@emotion/styled'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useMediaQuery } from '@react-hook/media-query'
import Constants from '../util/Constants'

const Wrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    padding: 1rem;
    z-index: 5;

    & button {
        margin-bottom: 3px;
        position: absolute;
        top: 2rem;
        right: 2rem;
        transition: top 0.3s, right 0.3s;
        z-index: -1;
    }

    :hover {
        & button {
            top: -1rem;
            right: -0.8rem;
        }
    }

    @media (max-width: 800px) {
        right: 10px;

        img {
            width: 100px;
        }
    }

    @media (max-device-width: 800px) {
        & button {
            top: -1rem;
            right: -0.8rem;
        }
    }
`

const Reopen = styled.div`
    position: fixed;
    bottom: 60px;
    width: 50px;
    height: 100px;
    right: 0;
    background-color: #fcfcfc;
    border-top-left-radius: 5px;
    border-end-start-radius: 5px;
    transition: background-color 1s, opacity 1s;
    opacity: 0.2;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & svg {
        transition: opacity 1s;
        opacity: 0;
    }

    :hover {
        background-color: #dfdfdf;
        opacity: 0.8;

        & svg {
            opacity: 1;
        }
    }
`

const CardIcon = ({ belowFold }) => {
    const [displayBC, setDisplayBC] = useState(false)
    const bcIcon = useSpring({ right: displayBC ? '30px' : '-300px' })
    const isMobile = useMediaQuery(Constants.androidQuery)

    useEffect(() => {
        if (belowFold) {
            setDisplayBC(true)
        } else {
            setDisplayBC(false)
        }
    }, [belowFold])

    const bcIconClickHandler = () => {
        window.scrollTo(0, 0)
    }

    const closeIcon = () => {
        setDisplayBC(false)
    }

    const reopenCard = () => {
        setDisplayBC(true)
    }

    return (
        <>
            {!isMobile && (
                <>
                    <Wrapper as={animated.div} style={bcIcon} id="cardIcon">
                        <IconButton size="small" onClick={closeIcon}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                        <img
                            onClick={bcIconClickHandler}
                            src={BusinessCardIcon}
                            alt="bcIcon"
                        />
                    </Wrapper>

                    {!displayBC && (
                        <Reopen onClick={reopenCard}>
                            <ArrowBackIosIcon />
                        </Reopen>
                    )}
                </>
            )}
        </>
    )
}

export default CardIcon
