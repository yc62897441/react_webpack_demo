// 套件
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// 靜態資源
import { ReactComponent as HomeIcon } from '../assets/home.svg'
import { ReactComponent as HomeIcon2 } from '../assets/home.svg?react'

import './homePage.css'

// 自定義 components

function Component() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '300px' }}>
            <HomeIcon />
            <div style={{ width: '100%', borderBottom: '1px solid #eeeeee' }} />
            <HomeIcon2 />
        </div>
    )
}

// 自定義函數 or 參數
import { dispatchLOADING } from '../actions'

function HomePage() {
    const isLoading = useSelector((state) => state.controlReducer.isLoading)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(dispatchLOADING(!isLoading))
    }

    return (
        <div>
            <Component />
            HomePage
            <div>
                測試：redux 【{isLoading.toString()}】<button onClick={handleClick}>改變 redux</button>
            </div>
        </div>
    )
}

export default HomePage
