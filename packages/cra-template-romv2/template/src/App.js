import JSONplaceholder from './components/models/json/JSONplaceholder'
import Layout from './components/views/Layout/Layout'

function App() {
    return (
        <Layout layoutStyle='default'>
            <JSONplaceholder type='todos' />
        </Layout>
    )
}

export default App
