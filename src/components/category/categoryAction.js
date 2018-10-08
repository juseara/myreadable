import { FETCH_CATEGORIES } from '../../utils/types'
import { getCategories } from '../../utils/api'

export function fetchCategories(){
    const request = getCategories()
    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}