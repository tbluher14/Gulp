
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteMenuItemThunk } from '../../store/menuItem'
import './MenuItemCard.css'


const MenuItemCard = ({menuItems}) => {
    const dispatch = useDispatch();
    const businessId = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => (state.users))
    const allBusinesses = useSelector(state => state.business)
    const currentBusiness = allBusinesses[businessId.businessId]
    // const businessOwner = allBusinesses[owner_id]

    console.log('Business Owner', currentBusiness?.owner_id)
    console.log('Business_Id**********', businessId.businessId)
    console.log('Business**********', allBusinesses)
    // console.log('BusinessOwner**********', businessOwner)


    return (

    <div className='menu-item-card'>
        <h1>Menu: </h1>
        <img
        src={`https://www.seriouseats.com/thmb/5avoLwcpCbqBCZX6Gnp24QNIBZ8=/1500x844/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg`}
        alt=' '
        className='menu-item-image'
        >

        </img>
        {menuItems.name}
        Price:
        {menuItems.price}
        {sessionUser?.id == currentBusiness?.owner_id && (
            <button onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}>Delete Menu Item</button>
        )}
    </div>
    )
}


export default MenuItemCard
