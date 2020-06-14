import {createSelector} from 'reselect';

const SelectUser = state => state.user;



export const selectCurrentUser = createSelector(
    [SelectUser],
    (user)=>user.currentUser
)