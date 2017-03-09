#!/bin/bash
url=$1
end=$((SECONDS+120))

testSite() {
    curl -s -f -o /dev/null $url
    echo $?
}

while [[ "$(testSite)" != 0 ]] && [[ $SECONDS -lt $end ]]; do
    echo -ne .
    sleep 1
done

exit $(testSite)
