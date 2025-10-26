import React, { createContext, useContext, useEffect, useReducer } from 'react'

const TEAM_STORAGE_KEY = 'sw-team-ids'

type State = { ids: number[] }
type Action =
  | { type: 'add'; id: number }
  | { type: 'remove'; id: number }
  | { type: 'hydrate'; ids: number[] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'hydrate':
      return { ids: action.ids.slice(0, 5) }
    case 'add':
      if (state.ids.includes(action.id) || state.ids.length >= 5) return state
      return { ids: [...state.ids, action.id] }
    case 'remove':
      return { ids: state.ids.filter((x) => x !== action.id) }
    default:
      return state
  }
}

type CtxValue = { state: State; dispatch: React.Dispatch<Action> }
const Ctx = createContext<CtxValue | null>(null)

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ids: [] })

  const safeGet = (): number[] => {
    try {
      if (typeof window === 'undefined') return []
      const raw = window.localStorage.getItem(TEAM_STORAGE_KEY)
      return raw ? (JSON.parse(raw) as number[]) : []
    } catch { return [] }
  }
  const safeSet = (ids: number[]) => {
    try {
      if (typeof window === 'undefined') return
      window.localStorage.setItem(TEAM_STORAGE_KEY, JSON.stringify(ids))
    } catch {}
  }

  useEffect(() => {
    const ids = safeGet()
    if (ids.length) dispatch({ type: 'hydrate', ids })
  }, [])

  useEffect(() => { safeSet(state.ids) }, [state.ids])

  return React.createElement(Ctx.Provider, { value: { state, dispatch } }, children)
}

export const useTeam = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTeam must be used within TeamProvider')
  return ctx
}
