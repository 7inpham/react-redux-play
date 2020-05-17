import React from 'react'
import { connect } from 'react-redux'

function Hello({name}) {
  return (
    <div>
      Hello {name}
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps)(Hello)
