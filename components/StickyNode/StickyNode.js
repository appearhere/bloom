/**
 * We don't actually need to do anything with the sticky node component,
 * but having a reference to it beyond just the dependency in package.json
 * seems like a good idea.
 *
 * Also means if we switch out which component we rely on, the import statement
 * can stay pretty much unchanged.
 *
 * https://github.com/yahoo/react-stickynode
 */
import Sticky from 'react-stickynode';
export default Sticky;