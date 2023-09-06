/* SELECTORS */

export const getOrders = ({ orders }) => orders;

export const getOrderById = ({ orders }, id) =>
  orders.dataSingle.find((order) => order.id === id);

/* ACTIONS */

const createActionName = (actionName) => `app/order/${actionName}`;
export const CREATE_ORDER = createActionName('CREATE_ORDER');
export const ADD_PRODUCT_TO_ORDER = createActionName('ADD_PRODUCT_TO_ORDER');
export const EDIT_ORDER = createActionName('EDIT_ORDER');
export const POST_ORDER = createActionName('POST_ORDER');

/* ACTION CREATORS */

export const createOrder = (payload) => ({
  payload,
  type: CREATE_ORDER,
});
export const addProductToOrder = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_ORDER,
});
export const editOrder = (payload) => ({
  payload,
  type: EDIT_ORDER,
});
export const postOrder = (payload) => ({
  payload,
  type: POST_ORDER,
});

/* INITIAL STATE */

const initialState = {};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return{ userId: 'e578961s-6c5v-49a9-1309-5df1ge9657ba', products: [] };;
    case ADD_PRODUCT_TO_ORDER:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    case EDIT_ORDER:
      return;
    case POST_ORDER:
      return;
    default:
      return statePart;
  }
}