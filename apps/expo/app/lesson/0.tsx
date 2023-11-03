import { Lesson0 as Lesson } from 'app/features/lessons/lesson0'
import { ScrollView } from '@my/ui'

export default function Screen () {
  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      <Lesson />
    </ScrollView>
  )
}
