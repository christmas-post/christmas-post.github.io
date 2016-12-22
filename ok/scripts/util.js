define([], function() {

	function getName() {
        return hasNonEmptyHash() ? decodeSimple(getHash().substring(1)) : ''
	}

    function generationStage() {
        return !hasNonEmptyHash()
    }

    function createUrl(value) {
        return window.location.protocol + '//' + window.location.host + window.location.pathname + '#' + encodeSimple(value)
    }

	return {
		generationStage: generationStage
      , getName: getName
      , createUrl: createUrl

	}

    function getHash() {
        return window.location.hash 
    }
 
     function hasNonEmptyHash() {
        var hashFragment =  getHash()
        return !!hashFragment && hashFragment.length > 1  
    }

    function encodeSimple(value) {
        return encodeURIComponent(value)
    }

    function decodeSimple(value) {
        return decodeURIComponent(value)
    }

    function encode(value) {
        var encodedURIComponent = encodeURIComponent(value)
          , base64EncodedUriComponent = btoa(encodedURIComponent)

        return encodedURIComponent
    }

    function decode(base64EncodedUriComponent) {
        var encodedURIComponent = atob(base64EncodedUriComponent)
          , rawValue = decodeURIComponent(encodedURIComponent)

        return rawValue
    }
})
