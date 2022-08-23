import { useMediaQuery } from '@react-hook/media-query'
import Constants from '../util/Constants'

const Mobile = ({ children, desktop }) => {
    const isMobile = useMediaQuery(Constants.mobileQuery)

    return (
        <>
            {isMobile && { children }}
            {desktop && !isMobile && { children }}
        </>
    )
}

export default Mobile
