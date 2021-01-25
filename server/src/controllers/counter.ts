import Counter from '../models/counter'

const get = async (): Promise<number | undefined> => {
  try {
    const [counter, created] = await Counter.findOrCreate({
      where: { id: 1 },
      defaults: {
        value: 0,
      },
    })

    if (created) {
      console.log(`Created a new counter with ID: ${counter.id}`)
    }

    return counter.value
  } catch (error) {
    console.log(`Error creating/getting counter: ${error}`)
  }
}

const increment = async (): Promise<void> => {
  try {
    await Counter.increment('value', { where: { id: 1 } })
  } catch (error) {
    console.log(`Error incrementing counter: ${error}`)
  }
}

export const CounterController = {
  get,
  increment,
}
