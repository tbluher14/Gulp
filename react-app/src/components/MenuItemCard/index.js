
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteMenuItemThunk } from '../../store/menuItem'
import './MenuItemCard.css'


const MenuItemCard = ({ menuItems }) => {
    const dispatch = useDispatch();
    const businessId = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => (state.users))
    const allBusinesses = useSelector(state => state.business)
    const currentBusiness = allBusinesses[businessId.businessId]


    return (

    <div className='menu-item-card'>
        <img
        className='menu-item-image'
        src={`https://www.seriouseats.com/thmb/5avoLwcpCbqBCZX6Gnp24QNIBZ8=/1500x844/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg`}
        alt=' '
        >
        </img>

        <div className='menu-item-description'>
            <div className='menu-item-name'>{menuItems?.name}</div>
            <div className='menu-item-price'>{`Price: $${menuItems?.price}`}</div>

                {/* {sessionUser?.id == currentBusiness?.owner_id && (
                    <button onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}>Delete Menu Item</button>
                )} */}

                {sessionUser?.id == currentBusiness?.owner_id && (
                    <i class="fa-solid fa-trash fa-lg menu-item-delete" onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}></i>
                    // <button onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}>Delete Menu Item</button>
                )}

        </div>
    </div>
    )
}


export default MenuItemCard
