import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('testing useForm', () => {

    test('should return the values be default', () => {

        const {} = renderHook( () => useForm())

    })

})