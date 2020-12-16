import React, { Component } from 'react';

import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import orderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.9,
    bacon: 0.5,
    cheese: 0.4,
    meat: 1.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        ingredientPrice: 4,
        purchase: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseHandlerClose = () => {
        this.setState({ purchasing: false })
    }


    updatedPurchaseHandler(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sumF, el) => {
                return sumF + el
            }, 0)
        console.log(sum)
        this.setState({ purchase: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type]
        const updatedCount = currentCount + 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        const addingredientprice = INGREDIENTS_PRICES[type]
        const updatePrice = this.state.ingredientPrice + addingredientprice
        this.setState({
            ingredientPrice: updatePrice,
            ingredients: updatedIngredient
        })
        this.updatedPurchaseHandler(updatedIngredient)
    }
    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type]
        if (currentCount <= 0) {
            return;
        }
        const updatedCount = currentCount - 1
        const updatedIngredient = { ...this.state.ingredients }
        updatedIngredient[type] = updatedCount
        const price = this.state.ingredientPrice
        const deduction = price - INGREDIENTS_PRICES[type]

        this.setState({
            ingredients: updatedIngredient,
            ingredientPrice: deduction
        })
        //upon removing element... button should be update
        this.updatedPurchaseHandler(updatedIngredient)
    }
    render() {
        const disableINFO = { ...this.state.ingredients }
        for (let key in disableINFO) {
            disableINFO[key] = disableINFO[key] <= 0
        }
        return (
            <Aux>
                <div>
                    <Modal 
                    showOrder={this.state.purchasing}
                    closed = {this.purchaseHandlerClose}
                    >
                        <OrderSummary ingredients={this.state.ingredients} />
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disable={disableINFO}
                        price={this.state.ingredientPrice}
                        disableOrder={this.state.purchase}
                        ordered={this.purchaseHandler}
                    />
                </div>
            </Aux>

        )
    }
}
export default BurgerBuilder;