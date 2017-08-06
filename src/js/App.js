import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maxime. Repellat nemo rerum inventore ut quam laboriosam minima nisi id temporibus, veniam perferendis facilis placeat, asperiores alias cum eius aut facere atque quasi. Adipisci voluptates ad praesentium fugit cum ex, exercitationem qui, voluptate, quisquam accusamus consequuntur aliquam nobis voluptatibus esse. Tempora necessitatibus nesciunt repellendus doloremque ducimus error maxime distinctio, modi. Harum quibusdam eligendi molestias sequi mollitia facere, autem explicabo similique ab modi repellat iste reiciendis natus cupiditate suscipit dolorem. Odio possimus excepturi quam deleniti quibusdam, repudiandae dignissimos vel rerum laborum quisquam quas minus hic voluptatem dolor corporis a accusamus necessitatibus!</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
