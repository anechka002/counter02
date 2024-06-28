export type InitialType = {editMode: boolean}

const initialState: InitialType = {
  editMode: false
}

type EditModeAC = ReturnType<typeof editModeAC>

type ActionsType = EditModeAC

export const modeReducer = (state = initialState, action: ActionsType):InitialType => {
  switch(action.type) {
    case 'EDIT-MODE': {
      return {
        ...state,
        editMode: action.editMode
      }
    }
    default: return state
  }
}

export const editModeAC = (value: boolean) => {
  return {type: 'EDIT-MODE', editMode: value} as const
}