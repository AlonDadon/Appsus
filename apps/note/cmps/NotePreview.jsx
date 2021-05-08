

import { NoteTxt } from './DynamicCmp/preview/NoteTxt.jsx'
import { NoteTodos } from './DynamicCmp/preview/NoteTodos.jsx'

export function NotePreview(props) {
    const { type } = props.note
    return (
        <div>
            {type === 'NoteTxt' && <NoteTxt props={props} />}
            {type === 'NoteTodos' && <NoteTodos props={props} />}
        </div>
    )
}
