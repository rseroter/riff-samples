module.exports = name => {
    console.log('received request for ${name}');
    return 'hello ${name} from ${hostname}'
  };